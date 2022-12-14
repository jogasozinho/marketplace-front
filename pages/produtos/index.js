import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import * as Icon from "react-bootstrap-icons";
import ProductImg from "../../public/imgs/produto.jpg";
import {
  Card,
  Row,
  Col,
  InputGroup,
  Form,
  Button,
  Table,
  Pagination,
} from "react-bootstrap";

export default function Produtos() {
  return (
    <Card className="m-md-5 p-md-5">
      <h2 className="text-center">Produtos</h2>
    </Card>
  );
}
