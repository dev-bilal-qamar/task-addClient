import type { ReactNode } from "react";
import { MdDashboard } from "react-icons/md";
import { IoIosListBox } from "react-icons/io";
import { FaFileLines } from "react-icons/fa6";
import { Star } from "lucide-react";
import React from "react";

export type SubMenuItem = {
  id: string;
  label: string;
  href: string;
};

export type MenuItem = {
  id: string;
  label: string;
  icon?: ReactNode;
  href?: string;
  subItems?: SubMenuItem[];
};

export const menuItems: MenuItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    href: "/dashboard",
    icon: React.createElement(MdDashboard),
  },
  {
    id: "product-list",
    label: "Product List",
    href: "/product-list",
    icon: React.createElement(IoIosListBox),
  },
  {
    id: "file",
    label: "File",
    icon: React.createElement(FaFileLines),

    subItems: [
      { id: "customer", label: "Customer", href: "/file/customer" },
      { id: "suppliers", label: "Suppliers", href: "/file/suppliers" },
      { id: "salary", label: "Salary", href: "/file/salary" },
      {
        id: "salary-international",
        label: "Salary International",
        href: "/file/sal",
      },
      {
        id: "tax-deduction",
        label: "Tax Deduction",
        href: "/file/tax-deduction",
      },
      { id: "articles", label: "Articles", href: "/file/articles" },
      {
        id: "articles-wholesale",
        label: "Articles Wholesale",
        href: "/file/articles-wholesale",
      },
      {
        id: "product-manual",
        label: "Product Master",
        href: "/file/product-manual",
      },
      {
        id: "product-sale-price",
        label: "Product Sale Price Change",
        href: "/file/product-sale-price",
      },
      { id: "bom", label: "BOM", href: "/file/bom" },
      {
        id: "add-product-price",
        label: "Ask Product Price To:",
        href: "/file/add-product-price",
      },
      {
        id: "quotation-followers",
        label: "Quotation Followers",
        href: "/file/quotation-followers",
      },
    ],
  },
  {
    id: "taux-du-jour",
    label: "Taux Du Jour",
    href: "/taux-du-jour",
    icon: React.createElement(Star),
  },
];
