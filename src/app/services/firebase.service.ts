import { QuerySnapshot } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import {
  addDoc,
  query,
  getDocs,
  where,
  doc,
  updateDoc,
  orderBy,
  limit,
} from 'firebase/firestore/lite';
import { SharedService } from './sharedService.service';

@Injectable({
  providedIn: 'root',
})
export class Firebase {
  private ordersCollection: any;
  constructor(private angularFirestore: AngularFirestore) {
    this.ordersCollection = this.angularFirestore.collection<any>('orders');
  }

  async get(status: string) {
    try {
      const querySnapshot = await this.ordersCollection.ref
        .where('status', '==', status)
        .get();

      const orderList = querySnapshot.docs.map((doc: any) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });

      orderList.sort((a: any, b: any) => b.orderNumber - a.orderNumber);
      return orderList;
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  async post(data: Order) {
    try {
      await this.ordersCollection.add(data);
      // await addDoc(this.ordersCollection, data);
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  async updateStatus(orderNumber: number, newStatus: string) {
    try {
      if (newStatus === null) return false;

      const orderDocRef = this.angularFirestore
        .collection('orders')
        .ref.where('orderNumber', '==', orderNumber);

      const orderQuerySnapshot = await orderDocRef.get();

      if (orderQuerySnapshot.empty) {
        console.log('No documents found with the given orderNumber.');
        return false;
      }

      const orderDoc = orderQuerySnapshot.docs[0];
      const orderRef = this.angularFirestore.doc(`orders/${orderDoc.id}`).ref;

      await orderRef.update({ status: newStatus });

      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  async getOrderCount() {
    try {
      const querySnapshot = await this.ordersCollection.ref
        .orderBy('createdAt', 'desc')
        .limit(1)
        .get();
      const orderList = querySnapshot.docs.map((doc: any) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });
      console.log(orderList);
      return orderList[0].orderNumber !== undefined
        ? orderList[0].orderNumber
        : 0;
    } catch (err) {
      console.error(err);
      return -1;
    }
  }
  async getOrderCountByStatus(status: string) {
    try {
      const querySnapshot = await this.ordersCollection.ref
        .where('status', '==', status)
        .get();
      const orderList = querySnapshot.docs.map((doc: any) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });
      return orderList.length;
    } catch (err) {
      console.error(err);
      return -1;
    }
  }
  async getAllStatusCounts() {
    try {
      const statusList = [
        'accepted',
        'cooking',
        'parcelready',
        'delivered',
        'completed',
      ];

      const countPromises = statusList.map(async (status) => {
        const count = await this.getOrderCountByStatus(status);
        return count;
      });

      const statusCountsArray = await Promise.all(countPromises);

      return statusCountsArray;
    } catch (err) {
      console.error(err);
      return [];
    }
  }


  async getLastOrderNum() {}

}

interface Order {
  contact: string;
  createdAt: Date;
  message: string;
  name: string;
  orderNumber: number;
  status: string;
  total: number;
  type: string;
}
