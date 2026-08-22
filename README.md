# Society Management System

A full-stack web application for managing residential societies/apartments.

The system connects residents, society administrators, security staff, and maintenance staff in one platform.

## Project Status

🚧 **Currently in development**

This project is being developed step-by-step while learning the technologies required to build and deploy a full-stack web application.

---

## Main Features

### Resident

- View society notices
- Submit and track complaints
- View maintenance bills
- View payment history
- Generate visitor QR passes
- Approve or reject unexpected visitors
- View important society information

### Society Admin

- Manage residents and flats
- Manage staff
- Create and manage notices
- Manage complaints and assign tasks
- Generate and manage maintenance bills
- Track payments
- Manage visitors and security settings
- Manage society expenses
- View reports and activity

### Security Staff

- Scan visitor QR passes
- Verify visitor information
- Record visitor entry and exit
- Handle unexpected visitors
- View expected visitors
- Record deliveries

### Maintenance Staff

- View assigned tasks
- View complaint details
- Update task status
- Upload work/repair photos
- Mark tasks as completed

---

## Planned Technology Stack

### Frontend

- React
- TypeScript
- HTML
- CSS
- Tailwind CSS

### Backend

- Java
- Spring Boot
- Spring Security
- REST API
- JPA / Hibernate

### Database

- PostgreSQL

### Development Tools

- IntelliJ IDEA
- Visual Studio Code
- Postman
- pgAdmin
- Git
- GitHub

---

## Project Structure

```text
society-management/
│
├── frontend/       # React frontend application
│
├── backend/        # Spring Boot backend application
│
├── database/       # Database design, SQL scripts and related files
│
└── README.md       # Project documentation
```

---

## Core System

The application is based around four main user roles:

```text
                    Society Management System
                              │
          ┌───────────────────┼───────────────────┐
          │                   │                   │
       Resident             Admin              Staff
                                                  │
                                           ┌──────┴──────┐
                                           │             │
                                      Maintenance    Security
```

Different users will have different permissions and dashboards based on their role.

---

## Planned Workflow

### Complaint Management

```text
Resident submits complaint
          ↓
       Admin reviews
          ↓
     Staff assigned
          ↓
     Work in progress
          ↓
      Work completed
          ↓
 Resident confirms/rejects
          ↓
        Closed
```

### Visitor Management

```text
Resident creates visitor pass
          ↓
       QR generated
          ↓
      Security scans
          ↓
     QR verification
       ↙       ↘
   Valid       Invalid
     ↓            ↓
  Entry       Reject / Request
              Resident approval
```

### Maintenance

```text
Admin creates bill
        ↓
Resident views bill
        ↓
Payment
        ↓
Payment recorded
        ↓
Receipt / payment history
```

---

## Development Roadmap

### Phase 1 — Project Setup

- [x] Create project structure
- [ ] Initialize Git repository
- [ ] Create GitHub repository
- [ ] Set up frontend
- [ ] Set up backend
- [ ] Connect PostgreSQL

### Phase 2 — Authentication

- [ ] User registration
- [ ] Login
- [ ] Password security
- [ ] Role-based access
- [ ] User profile

### Phase 3 — Society Management

- [ ] Society management
- [ ] Building management
- [ ] Flat management
- [ ] Resident management
- [ ] Staff management

### Phase 4 — Complaint & Maintenance

- [ ] Create complaints
- [ ] Complaint status
- [ ] Assign staff
- [ ] Staff tasks
- [ ] Task completion
- [ ] Resident confirmation

### Phase 5 — Visitor Management

- [ ] Create visitor passes
- [ ] QR generation
- [ ] QR verification
- [ ] Visitor entry/exit
- [ ] Unexpected visitor approval

### Phase 6 — Maintenance & Payments

- [ ] Generate maintenance bills
- [ ] Payment records
- [ ] Payment history
- [ ] Receipts
- [ ] Society expenses

### Phase 7 — Communication

- [ ] Notices
- [ ] Notifications
- [ ] Documents
- [ ] Delivery management

### Phase 8 — Finalization

- [ ] Responsive mobile layout
- [ ] Testing
- [ ] Error handling
- [ ] Security improvements
- [ ] Deployment
- [ ] Production database
- [ ] Final documentation

---

## Goals

The main goals of this project are:

1. Build a practical full-stack application.
2. Learn frontend and backend development through a real project.
3. Learn database design and management.
4. Implement authentication and authorization.
5. Build REST APIs.
6. Create a responsive interface for desktop and mobile.
7. Learn how to test and deploy a web application.
8. Create a project suitable for a professional portfolio.

---

## Future Possibilities

Possible future improvements include:

- Progressive Web App (PWA)
- Push notifications
- Online payment gateway
- Advanced analytics
- Multiple society support
- Automated reports
- Native mobile application
- Advanced visitor/security features

---

## License

This project is currently being developed as a personal learning and portfolio project.
