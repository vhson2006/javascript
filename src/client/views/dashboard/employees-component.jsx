import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Pagination from 'react-bootstrap/Pagination';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FormattedMessage } from 'react-intl';
import { BsFillTrashFill, BsPencilSquare } from 'react-icons/bs';
import { getEmployees } from '../../services/employee-service';

const paginationStyle = { justifyContent: 'center' };
const EmployeesComponent = () => {
  const [employees, setEmployees] = useState([]);
  const fetchEmployees = async () => {
    const data = await getEmployees();
    setEmployees(data.getEmployees);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <Card>
      <Card.Header>
        <h1><FormattedMessage id="employeeTitle" /></h1>
      </Card.Header>
      <Card.Body>
        <FormattedMessage id="employeeSearchPlaceholder">
          {
            (msg) => (
              <Form.Group as={Row}>
                <Col sm={8}>
                  <Form.Control placeholder={msg} />
                </Col>
                <Col sm={4} className="d-flex justify-content-end">
                  <Form.File
                    className="mr-2"
                    id="custom-file-translate-scss"
                    label="Employee list (.csv)"
                    data-browse="Import"
                    custom
                  />
                  <Button type="submit" className="mx-2">Export</Button>
                  <Button type="submit" className="ml-2">Add</Button>
                </Col>
              </Form.Group>
            )
}
        </FormattedMessage>
        <Table className="mt-4" striped bordered hover>
          <thead>
            <tr>
              <th>
                <FormattedMessage id="employeeName" />
              </th>
              <th>Email</th>
              <th>
                <FormattedMessage id="employeePhone" />
              </th>
              <th>Address</th>
              <th>Date Of Birth</th>
              <th>
                <FormattedMessage id="employeeOwner" />
              </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                  <td>{employee.phone}</td>
                  <td>{employee.address}</td>
                  <td>{employee.dateOfBirth}</td>
                  <td>{employee.account.name}</td>
                  <td>
                    <BsFillTrashFill />
                    <BsPencilSquare />
                  </td>
                </tr>
              ))
            }
          </tbody>
        </Table>
        <Pagination style={paginationStyle}>
          <Pagination.Item key={1} active={false}>
            {' '}
            {1}
            {' '}
          </Pagination.Item>
          <Pagination.Item key={2} active>
            {' '}
            {2}
            {' '}
          </Pagination.Item>
          <Pagination.Item key={3} active={false}>
            {' '}
            {3}
            {' '}
          </Pagination.Item>
          <Pagination.Item key={4} active={false}>
            {' '}
            {4}
            {' '}
          </Pagination.Item>
          <Pagination.Item key={5} active={false}>
            {' '}
            {5}
            {' '}
          </Pagination.Item>
        </Pagination>
      </Card.Body>
    </Card>
  );
};

export default EmployeesComponent;
