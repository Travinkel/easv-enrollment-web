export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function enrollStudent(studentId: string, courseId: string) {
    const response = await fetch(`${API_BASE_URL}/enrollments`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            studentId,
            courseId
        })
    });

    if (!response.ok) {
        throw new Error('Failed to enroll student');
    }

    return response.json();
}

export async function getEnrollment(id: string) {
    const response = await fetch(`${API_BASE_URL}/enrollments/${id}`);
    if (!response.ok) {
        throw new Error('Failed to get enrollment');
    }
    return response.json();
}