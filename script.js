const total_users = 100;
const users = [
    { name: 'John Doe', email: 'john.doe@example.com', role: 'admin', last_login_date: '2022-01-01' },
    { name: 'Jane Doe', email: 'jane.doe@example.com', role: 'instructor', last_login_date: '2022-01-02' },
    { name: 'Bob Smith', email: 'bob.smith@example.com', role: 'student', last_login_date: '2022-01-03' },
];

const pdfs = [
    { title: 'PDF 1', description: 'This is a PDF', tags: 'pdf, example', upload_date: '2022-01-01' },
    { title: 'PDF 2', description: 'This is another PDF', tags: 'pdf, example', upload_date: '2022-01-02' },
];

const videos = [
    { title: 'Video 1', description: 'This is a video', tags: 'video, example', upload_date: '2022-01-01' },
    { title: 'Video 2', description: 'This is another video', tags: 'video, example', upload_date: '2022-01-02' },
];

const total_courses_completed = 50;
const total_time_spent = 1000;
const user_feedback = [
    { name: 'John Doe', feedback_text: 'This is great!', rating: 5 },
    { name: 'Jane Doe', feedback_text: 'This is okay.', rating: 3 },
    { name: 'Bob Smith', feedback_text: 'This is terrible.', rating: 1 },
];

document.getElementById('total-users').textContent = total_users;
document.getElementById('user-list').innerHTML = '';
users.forEach(user => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.role}</td>
        <td>${user.last_login_date}</td>
    `;
    document.getElementById('user-list').appendChild(row);
});

document.getElementById('content-list').innerHTML = '';
pdfs.forEach(pdf => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${pdf.title}</td>
        <td>${pdf.description}</td>
        <td>${pdf.tags}</td>
        <td>${pdf.upload_date}</td>
    `;
    document.getElementById('content-list').appendChild(row);
});
videos.forEach(video => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${video.title}</td>
 <td>${video.description}</td>
        <td>${video.tags}</td>
        <td>${video.upload_date}</td>
    `;
    document.getElementById('content-list').appendChild(row);
});

document.getElementById('total-courses-completed').textContent = total_courses_completed;
document.getElementById('total-time-spent').textContent = total_time_spent;
document.getElementById('user-feedback-list').innerHTML = '';
user_feedback.forEach(feedback => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${feedback.name}</td>
        <td>${feedback.feedback_text}</td>
        <td>${feedback.rating}</td>
    `;
    document.getElementById('user-feedback-list').appendChild(row);
});