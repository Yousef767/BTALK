'use client';
let isAuthenticated = sessionStorage.getItem('token') !== null ? true : false;

export function setIsAuthenticated(value) {
  isAuthenticated = value;
}

export function getIsAuthenticated() {
  return isAuthenticated;
}
