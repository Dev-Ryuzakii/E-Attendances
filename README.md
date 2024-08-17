University Attendance System
Overview
The University Attendance System is a comprehensive solution designed to streamline attendance marking and management within a university setting. The application is built with Vue.js for the frontend, Node.js with Express for the backend, and MariaDB for the database. It supports three primary user roles: Admin, Lecturer, and Student, each with specific functionalities to facilitate effective attendance tracking and management.

Key Features
Admin Panel:

College and Department Management: Create and manage colleges, departments, and levels.
Course and Schedule Management: Add courses, set class schedules, and generate unique QR codes for each class session.
Attendance Control: Start and stop attendance marking manually.
Lecturer Panel:

View Attendance: Access and review attendance records for courses.
Manage Classes: View class schedules and QR codes.
Student Panel:

Mark Attendance: Scan QR codes and use biometric authentication to mark attendance.
Attendance History: View past attendance records.
Biometric and QR Code Integration:

Physical Biometrics: Integration with biometric systems (e.g., fingerprint or facial recognition).
Dynamic QR Codes: Generate unique QR codes for each class session to ensure accurate attendance marking.
Security Features:

One Device Per Student: Prevent multiple attendance markings from the same device.
Unique QR Codes: Each class session has a distinct QR code to prevent fraudulent attendance marking.
Technologies Used
Frontend: Vue.js
Backend: Node.js with Express
Database: MariaDB
Biometric Authentication: Integration with biometric SDKs or APIs
QR Code Generation: qrcode library for Node.js
Installation
Clone the Repository:

bash
Copy code
git clone https://github.com/Dev-Ryuzakii/E-Attendances.git
Navigate to the Project Directory:

bash
Copy code
cd E-Attendances
Install Dependencies:

bash
Copy code
npm install
Set Up the Database:

Configure your MariaDB instance and update the database connection details in the configuration files.
Start the Application:

bash
Copy code
npm start
Usage
Admin: Log in to manage colleges, departments, courses, and attendance schedules.
Lecturer: Log in to view attendance and manage classes.
Student: Log in to mark attendance using QR codes and biometric authentication.
Contributing
Contributions are welcome! Please open an issue or submit a pull request for any bugs, enhancements, or features.

License
This project is licensed under the MIT License. See the LICENSE file for details.
