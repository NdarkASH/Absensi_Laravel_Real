import React from "react";
import { Head, Link } from "@inertiajs/react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@heroui/react";
import { Button } from "@heroui/react";

interface Employee {
    employee_id: string;
    username: string;
    firstName: string;
    lastName: string;
    role: role;
}

enum role {
  SPPG = "SPPG",
  AKUNTAN = "AKUNTAN",
  GIZI = "GIZI",
  ASLAP = "ASLAP",
  DISTRIBUTOR = "DISTRIBUTOR",
  CUCI = "CUCI",
  PERSIAPAN = "PERSIAPAN",
  MASAK = "MASAK",
}

interface Props {
    employees: Employee[];
}


export default function Index({ employees }: Props) {
  return (
    <>
      <Head title="Employee List" />
      <div className="max-w-6xl p-6 mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Employee List</h1>
          <Link href={route("employees.create")}>
            <Button color="primary" variant="shadow">
              + Add Employee
            </Button>
          </Link>
        </div>

        <Table
          aria-label="Employee Table"
          className="shadow-md rounded-xl"
          removeWrapper
        >
          <TableHeader>
            <TableColumn>ID</TableColumn>
            <TableColumn>Name</TableColumn>
            <TableColumn>Email</TableColumn>
            <TableColumn>Role</TableColumn>
            <TableColumn>Actions</TableColumn>
          </TableHeader>
          <TableBody emptyContent="No employees found">
            {employees.map((employee) => (
              <TableRow key={employee.employee_id}>
                <TableCell>{employee.employee_id}</TableCell>
                <TableCell>{employee.username}</TableCell>
                <TableCell>{employee.firstName}</TableCell>
                <TableCell>{employee.lastName}</TableCell>
                <TableCell>{employee.role}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Link href={route("employees.show", employee.employee_id)}>
                      <Button size="sm" color="secondary" variant="flat">
                        View
                      </Button>
                    </Link>
                    <Link href={route("employees.edit", employee.employee_id)}>
                      <Button size="sm" color="warning" variant="flat">
                        Edit
                      </Button>
                    </Link>
                    <Link
                      href={route("employees.destroy", employee.employee_id)}
                      method="delete"
                      as="button"
                    >
                      <Button size="sm" color="danger" variant="flat">
                        Delete
                      </Button>
                    </Link>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
