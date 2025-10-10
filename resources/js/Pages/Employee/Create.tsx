import type { PageProps as InertiaPageProps } from "@inertiajs/core";

import React, { useState } from "react";
import { router, usePage } from "@inertiajs/react";
import {
    Input,
    Select,
    SelectItem,
    Button,
    Card,
    CardBody,
} from "@heroui/react";

interface EmployeePageProps extends InertiaPageProps {
    roles: string[];
}

interface CreateEmployee extends Record<string, string> {
    username: string;
    firstname: string;
    lastname: string;
    role: string;
}
export default function Create() {
    const { roles } = usePage<EmployeePageProps>().props;

    const [employee, setEmployee] = useState<CreateEmployee>({
        username: "",
        firstname: "",
        lastname: "",
        role: roles[0] || "",
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;

        setEmployee((prev) => ({ ...prev, [name]: value }));
    }

    function handleRoleChange(value: string) {
        setEmployee((prev) => ({ ...prev, role: value }));
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        router.post("/employees", employee, {
            onSuccess: () => {
                alert("Data berhasil dikirim!");
            },
            onError: (errs) => {
                setErrors(errs);
            },
        });
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <Card className="w-full max-w-md p-6 shadow-lg">
                <CardBody>
                    <h1 className="mb-6 text-2xl font-semibold text-center">
                        Tambah Karyawan
                    </h1>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <Input
                            fullWidth
                            errorMessage={errors.username}
                            isInvalid={!!errors.username}
                            label="Username"
                            name="username"
                            value={employee.username}
                            onChange={handleChange}
                        />

                        <Input
                            fullWidth
                            errorMessage={errors.firstname}
                            isInvalid={!!errors.firstname}
                            label="Nama Depan"
                            name="firstname"
                            value={employee.firstname}
                            onChange={handleChange}
                        />

                        <Input
                            fullWidth
                            errorMessage={errors.lastname}
                            isInvalid={!!errors.lastname}
                            label="Nama Belakang"
                            name="lastname"
                            value={employee.lastname}
                            onChange={handleChange}
                        />

                        <Select
                            label="Pilih Role"
                            selectedKeys={[employee.role]}
                            onSelectionChange={(keys) =>
                                handleRoleChange(Array.from(keys)[0] as string)
                            }
                        >
                            {roles.map((r) => (
                                <SelectItem key={r}>{r}</SelectItem>
                            ))}
                        </Select>

                        {errors.role && (
                            <p className="text-sm text-red-500">
                                {errors.role}
                            </p>
                        )}

                        <Button fullWidth color="primary" type="submit">
                            Simpan
                        </Button>
                    </form>
                </CardBody>
            </Card>
        </div>
    );
}
