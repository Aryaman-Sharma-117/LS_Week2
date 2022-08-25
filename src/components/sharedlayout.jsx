import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import Navbar from './Navbar';

export default function Sharedlayout() {
  return (
    <>
        <Outlet/>
    </>
  )
}
