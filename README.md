```markdown
# Personal Expense Tracker

## Overview

The Personal Expense Tracker is a web application designed to help users manage their expenses efficiently. Built using Spring Boot for the backend, MySQL for database management, and Angular for the frontend, this application allows users to record their expenses, categorize them, and view summaries of their spending habits.

### Key Features

- **User Management:** Create accounts, log in, and manage user sessions securely.
- **Expense Management:** Add, view, edit, and delete expense entries with details such as date, amount, category, and description.
- **Category Management:** Use default categories or create custom ones for organizing expenses.
- **Summary and Insights:** View total spending and spending breakdowns by category for different time periods.

## Technologies Used

- **Backend:** Spring Boot
- **Database:** MySQL
- **Frontend:** Angular
- **Authentication:** Firebase (for authentication in the project)

## Prerequisites

- Java 17 or later
- MySQL 8.0 or later
- Node.js 20.x or later
- Angular CLI 18.x or later
- npm 10.x or later

## Setup and Installation

### Backend (Spring Boot)

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/personal-expense-tracker.git
   ```

2. **Navigate to the backend directory:**

   ```bash
   cd personal-expense-tracker/backend
   ```

3. **Configure MySQL:**

   - Create a new database named `expense_tracker`.
   - Update the `src/main/resources/application.properties` file with your database credentials:

     ```properties
     spring.datasource.url=jdbc:mysql://localhost:3306/expense_tracker
     spring.datasource.username=your-username
     spring.datasource.password=your-password
     ```

4. **Build and run the Spring Boot application:**

   ```bash
   ./mvnw spring-boot:run
   ```

### Frontend (Angular)

1. **Navigate to the frontend directory:**

   ```bash
   cd personal-expense-tracker/frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure environment variables:**

   - Update `src/environments/environment.ts` with your API base URL:

     ```typescript
     export const environment = {
       production: false,
       apiBaseUrl: 'http://localhost:8080/api'
     };
     ```

4. **Run the Angular application:**

   ```bash
   ng serve
   ```

   The application will be available at `http://localhost:4200`.

## Usage

1. **Access the application** at `http://localhost:4200`.
2. **Register a new account** or **log in** using the authentication system.
3. **Navigate through the application** to add and manage expenses, view summaries, and manage categories.

## Contributing

1. **Fork the repository** on GitHub.
2. **Clone your fork**:

   ```bash
   git clone https://github.com/yourusername/personal-expense-tracker.git
   ```

3. **Create a new branch**:

   ```bash
   git checkout -b feature/your-feature
   ```

4. **Make your changes** and **commit** them:

   ```bash
   git add .
   git commit -m "Add your message here"
   ```

5. **Push your changes**:

   ```bash
   git push origin feature/your-feature
   ```

6. **Create a pull request** on GitHub.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Spring Boot](https://spring.io/projects/spring-boot) for the backend framework.
- [Angular](https://angular.io/) for the frontend framework.
- [MySQL](https://www.mysql.com/) for the database.

## Contact

For any questions or issues, please open an issue on GitHub or contact the project maintainer.

```
