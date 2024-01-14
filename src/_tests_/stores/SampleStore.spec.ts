import { useSampleStore } from '../../stores/SampleStore';
import { beforeEach, describe, expect, it } from 'vitest';
import { createPinia, setActivePinia } from 'pinia';

describe('SampleStore', () => {
 beforeEach(() => {
   setActivePinia(createPinia());
 });

 it('should initialize correctly', () => {
   const store = useSampleStore();
   expect(store.customers).toEqual(['Dan Malarkey', 'Precious Cobalt', 'Puxatawnee Fill']);
 });

 it('should set customers correctly', () => {
   const store = useSampleStore();
   store.setCustomers(['John Doe', 'Jane Doe']);
   expect(store.customers).toEqual(['John Doe', 'Jane Doe']);
 });

 it('should get first customer correctly', () => {
   const store = useSampleStore();
   expect(store.getFirstCustomer).toBe('Dan Malarkey');
 });

 it('should update state when calling setCustomers', () => {
   const store = useSampleStore();
   store.setCustomers(['John Doe', 'Jane Doe']);
   expect(store.$state.customers).toEqual(['John Doe', 'Jane Doe']);
 });

 it('should update state when calling getFirstCustomer', () => {
   const store = useSampleStore();
   expect(store.$state.customers[0]).toBe('Dan Malarkey');
 });
});

