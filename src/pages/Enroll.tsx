import { useState } from "react";
import { enrollStudent } from "../lib/api";

export default function Enroll() {
    const [studentId, setStudentId] = useState("");
    const [courseId, setCourseId] = useState("");
    const [result, setResult] = useState<any>(null);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        try {
            const res = await enrollStudent(studentId, courseId);
            setResult(res);
        } catch (err: any) {
            alert(err.message);
        }
    }

    return (
        <div className="max-w-lg mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Enroll Student</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Student ID (GUID)"
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                    className="w-full p-2 border rounded"
                />
                <input
                    type="text"
                    placeholder="Course ID (GUID)"
                    value={courseId}
                    onChange={(e) => setCourseId(e.target.value)}
                    className="w-full p-2 border rounded"
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Submit
                </button>
            </form>

            {result && (
                <pre className="mt-6 p-4 bg-gray-100 rounded">
          {JSON.stringify(result, null, 2)}
        </pre>
            )}
        </div>
    );
}
