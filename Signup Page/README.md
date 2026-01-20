# Signup Page

A modern, responsive user signup form with validation and local storage integration.

## Features

- **User-Friendly Form**: Clean and intuitive signup interface
- **Form Validation**: Comprehensive client-side validation including:
  - Required field validation
  - Email format validation
  - Password strength check (minimum 6 characters)
  - Password confirmation matching
  - Gender selection requirement
- **LocalStorage Integration**: User data is saved to browser's local storage
- **Responsive Design**: Beautiful gradient background and card-based layout
- **Bootstrap 5**: Modern styling with Bootstrap framework
- **Real-time Feedback**: Success and error messages displayed dynamically

## SnapShot
<img width="1802" height="1093" alt="img" src="https://github.com/user-attachments/assets/bd1fd1d7-8ce2-4252-805f-c2e2a1d7b391" />


## Form Fields

1. **Username** - User's chosen username
2. **Email** - User's email address
3. **Password** - Password (minimum 6 characters)
4. **Re-Password** - Password confirmation
5. **Gender** - Radio button selection (Male, Female, Other)

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with gradients and transitions
- **JavaScript (Vanilla)** - Form validation and local storage
- **Bootstrap 5** - Responsive UI framework

## Installation

1. Download or clone this project
2. Open `index.html` in your web browser
3. No server or dependencies required!

## How to Use

1. Fill in all the form fields:
   - Enter a username
   - Enter your email address
   - Create a password (at least 6 characters)
   - Re-enter your password for confirmation
   - Select your gender

2. Click the "Sign Up" button

3. If validation passes:
   - User data is saved to browser's local storage
   - Success message is displayed with a welcome greeting
   - Form is automatically cleared

4. If validation fails:
   - An error message is displayed indicating what went wrong
   - Form data is retained for correction

## Validation Rules

- All fields are mandatory
- Gender must be selected
- Password must be at least 6 characters long
- Password and Re-Password fields must match exactly
- Email format is validated

## File Structure

```
Signup Page/
├── index.html      # HTML markup
├── script.js       # JavaScript validation logic
├── style.css       # CSS styling
└── README.md       # This file
```

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Demo

The form data is stored in the browser's local storage under the key `"user"` as JSON format:
```javascript
{
  "username": "user123",
  "email": "user@example.com",
  "gender": "Male"
}
```

## Notes

- Passwords are not stored in local storage for security reasons (demo purposes only)
- Clear browser cache to reset stored data
- This is a client-side form; no backend server required

## Future Enhancements

- Backend integration for database storage
- Email verification
- Password strength indicator
- Remember me functionality


## License

Free to use and modify
