<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use App\Http\Requests\StoreEmployeeRequest;
use App\Http\Requests\UpdateEmployeeRequest;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $employees = Employee::all();
        return response()->json([
            'resource' => 'employee',
            'message' => 'Success',
            'data' => $employees
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreEmployeeRequest $request)
    {
        $employee = Employee::create($request->validated());
        return response()->json([
            'resource' => 'employee',
            'message' => 'Created',
            'data' => $employee
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Employee $employee)
    {
        return response()->json([
            'resource' => 'employee',
            'message' => 'Success',
            'data' => $employee
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateEmployeeRequest $request, Employee $employee)
    {
        $employee->update($request->validated());
        return response()->json([
            'resource' => 'employee',
            'message' => 'Updated',
            'data' => $employee
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Employee $employee)
    {
        $employee->delete();
        return response()->json([
            'resource' => 'employee',
            'message' => 'Deleted'
        ]);
    }

    /**
     * Optionally, to send roles if needed (misal untuk form).
     */
    public function roles()
    {
        return response()->json([
            'resource' => 'employee',
            'message' => 'Success',
            'roles' => Employee::ROLES
        ]);
    }
}
