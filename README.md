# My Blog App 📝

Hey there! 👋 This is my blog app that I built using Node.js and MongoDB. It's a simple but powerful platform where users can write, share, and manage their blog posts.

## What can you do with it? 🤔

- Sign up and create your own profile
- Write awesome blog posts with images
- Edit or delete your posts whenever you want
- Upload a cool profile picture
- Browse other people's posts

## Getting Started 🚀

### What you'll need:
- Node.js installed on your computer
- MongoDB (local or Atlas)
- Your favorite code editor (I use VS Code!)

### Setup:

1. First, clone this bad boy:
```bash
git clone https://github.com/yourusername/blog-app.git
cd blog-app
```

2. Install the stuff we need:
```bash
npm install
```

3. Create a `.env` file in the root folder and add these lines:
```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=make_this_super_secret
```

4. Create a folder for uploads:
```bash
mkdir uploads
```

### Running the app:

For development (with hot reload):
```bash
npm run dev
```

For production:
```bash
npm start
```

Then just head to `http://localhost:3000` and you're good to go! 🎉

## API Stuff 🔧

Here are the main endpoints you can use:

### Auth:
- `POST /api/auth/signup` - Create a new account
- `POST /api/auth/login` - Log into your account
- `GET /api/auth/me` - Get your profile info

### Blogs:
- `GET /api/blogs` - See all blogs
- `POST /api/blogs` - Create a new blog
- `GET /api/blogs/:id` - Look at one blog
- `PUT /api/blogs/:id` - Update your blog
- `DELETE /api/blogs/:id` - Delete a blog

## Tech I Used 🛠

- Frontend: Good ol' HTML, CSS, JavaScript with Bootstrap for styling
- Backend: Node.js & Express
- Database: MongoDB
- Auth: JWT tokens
- Image uploads: Multer

## Want to help? 🤝

Feel free to contribute! Here's how:

1. Fork it
2. Create your feature branch: `git checkout -b cool-new-feature`
3. Commit your changes: `git commit -m 'Added something awesome'`
4. Push to the branch: `git push origin cool-new-feature`
5. Open a Pull Request!

## License

MIT License - do whatever you want with it! 😊

---
Made with ☕️ and 💻 by [Your Name]