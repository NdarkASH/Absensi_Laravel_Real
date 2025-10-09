import { router, Link, Head } from '@inertiajs/react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Select, SelectItem } from "@heroui/react";
import { Button } from "@heroui/react";
import { label } from 'framer-motion/client';

interface Employee {
    uuid: string;
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
    employees: {
        data: Employee[];
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
    }
}

const perPageOptions = [
    {key: 5, label: "5"},
    {key: 10, label: "10"},
    {key: 25, label: "25"}
];

export default function Index({ employees }: Props) {
    console.log(employees);

  return (
    <>
      <Head title="Employee List" />
      <div className="max-w-6xl p-6 mx-auto">
        {/* Per Page Dropdown */}
        <div className="flex items-center gap-2 mb-4">
          <span>Show</span>
          <Select
            value={employees.per_page}
            onChange={(e) => {
            const perPage = Number(e.target.value);
            router.get(route("employees.index"), { perPage }, { preserveState: true });
            }}
            className="p-1 border rounded"
            >
  {perPageOptions.map((opt) => (
    <SelectItem key={opt.key}>
      {opt.label}
    </SelectItem>
  ))}
</Select>
          <span>entries</span>
        </div>

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Employee List</h1>
          <Link href={route("employees.create")}>
            <Button color="primary" variant="shadow">
              + Add Employee
            </Button>
          </Link>
        </div>

        {/* Table */}
        <Table
          aria-label="Employee Table"
          className="shadow-md rounded-xl"
          removeWrapper
        >
          <TableHeader>
            <TableColumn>ID</TableColumn>
            <TableColumn>Username</TableColumn>
            <TableColumn>Firstname</TableColumn>
            <TableColumn>Lastname</TableColumn>
            <TableColumn>Role</TableColumn>
            <TableColumn>Actions</TableColumn>
          </TableHeader>
          <TableBody emptyContent="No employees found">
            {employees.data.map((employee) => (
              <TableRow key={employee.uuid}>
                <TableCell>{employee.uuid}</TableCell>
                <TableCell>{employee.username}</TableCell>
                <TableCell>{employee.firstName}</TableCell>
                <TableCell>{employee.lastName}</TableCell>
                <TableCell>{employee.role}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Link href={route("employees.show", employee.uuid)}>
                      <Button size="sm" color="secondary" variant="flat">
                        View
                      </Button>
                    </Link>
                    <Link href={route("employees.edit", employee.uuid)}>
                      <Button size="sm" color="warning" variant="flat">
                        Edit
                      </Button>
                    </Link>
                    <Link
                      href={route("employees.destroy", employee.uuid)}
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
