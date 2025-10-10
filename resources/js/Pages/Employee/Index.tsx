import {
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Pagination,
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow,
} from '@heroui/react';
import { Head, Link, router } from '@inertiajs/react';

import DefaultLayout from '@/layouts/default';

interface Employee {
    uuid: string;
    username: string;
    firstname: string;
    lastname: string;
    role: role;
}

enum role {
    SPPG = 'SPPG',
    AKUNTAN = 'AKUNTAN',
    GIZI = 'GIZI',
    ASLAP = 'ASLAP',
    DISTRIBUTOR = 'DISTRIBUTOR',
    CUCI = 'CUCI',
    PERSIAPAN = 'PERSIAPAN',
    MASAK = 'MASAK',
}

interface Props {
    employees: {
        data: Employee[];
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
    };
}

const perPageOptions = [5, 10, 25];

export default function Index({ employees }: Props) {
    const currentPerPage = employees.per_page;

    const handlePerPageChange = (key: React.Key) => {
        const newPerPage = Number(key);

        router.get(
            route('employees.index'),
            { perPage: newPerPage, page: 1 },
            { preserveState: true },
        );
    };

    const handlePageChange = (page: number) => {
        router.get(
            route('employees.index'),
            { page, perPage: currentPerPage },
            { preserveState: true },
        );
    };

    return (
        <DefaultLayout>
            <Head title="Employee List" />
            <div className="max-w-6xl p-6 mx-auto">
                <div className="flex items-center gap-2 mb-4">
                    <span>Show</span>
                    <Dropdown>
                        <DropdownTrigger>
                            <Button className="min-w-[80px]" variant="bordered">
                                {employees.per_page}
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu
                            aria-label="Per Page"
                            onAction={handlePerPageChange} // FIX: Menggunakan onAction dan handler yang benar
                        >
                            {perPageOptions.map((num) => (
                                <DropdownItem key={num}>{num}</DropdownItem>
                            ))}
                        </DropdownMenu>
                    </Dropdown>
                    <span>entries</span>
                </div>

                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold">Employee List</h1>
                    <Link href={route('employees.create')}>
                        <Button color="primary" variant="shadow">
                            + Add Employee
                        </Button>
                    </Link>
                </div>

                {/* Table */}
                <Table
                    removeWrapper
                    aria-label="Employee Table"
                    className="flex items-center shadow-md rounded-xl"
                >
                    <TableHeader>
                        <TableColumn>Username</TableColumn>
                        <TableColumn>Firstname</TableColumn>
                        <TableColumn>Lastname</TableColumn>
                        <TableColumn>Role</TableColumn>
                        <TableColumn>Actions</TableColumn>
                    </TableHeader>
                    <TableBody emptyContent="No employees found">
                        {employees.data.map((employee) => (
                            <TableRow key={employee.uuid}>
                                <TableCell>{employee.username}</TableCell>
                                <TableCell>{employee.firstname}</TableCell>
                                <TableCell>{employee.lastname}</TableCell>
                                <TableCell>{employee.role}</TableCell>
                                <TableCell>
                                    <div className="flex flex-wrap gap-2">
                                        <Link
                                            href={route(
                                                'employees.edit',
                                                employee.uuid,
                                            )}
                                        >
                                            <Button
                                                color="warning"
                                                size="sm"
                                                variant="flat"
                                            >
                                                Edit
                                            </Button>
                                        </Link>
                                        <Link
                                            as="button"
                                            href={route(
                                                'employees.destroy',
                                                employee.uuid,
                                            )}
                                            method="delete"
                                        >
                                            <Button
                                                color="danger"
                                                size="sm"
                                                variant="flat"
                                            >
                                                Delete
                                            </Button>
                                        </Link>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <div className="grid mt-5 place-content-center">
                    <Pagination
                        showControls
                        page={employees.current_page}
                        total={employees.last_page}
                        onChange={handlePageChange} // FIX: Menggunakan handler yang sudah diperbaiki
                    />
                </div>
            </div>
        </DefaultLayout>
    );
}
