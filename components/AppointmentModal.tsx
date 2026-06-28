"use client";

import { useState } from "react";

type AppointmentModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function AppointmentModal({
  isOpen,
  onClose,
}: AppointmentModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    therapyType: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Appointment booked successfully!");

        setFormData({
          fullName: "",
          email: "",
          phone: "",
          therapyType: "",
          preferredDate: "",
          preferredTime: "",
          message: "",
        });

        onClose();
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">

      <div className="bg-white rounded-2xl shadow-xl w-full max-w-xl p-8 relative">

        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-2xl"
        >
          ×
        </button>

        <h2 className="text-3xl font-bold mb-2">
          Schedule a Consultation
        </h2>

        <p className="text-gray-600 mb-6">
          Fill in the details below.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="block mb-1">Full Name</label>

            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-1">Email</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-1">Phone</label>

            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-1">Therapy Type</label>

            <select
              name="therapyType"
              value={formData.therapyType}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3"
            >
              <option value="">Select Therapy</option>
              <option>Anxiety Therapy</option>
              <option>Trauma Therapy</option>
              <option>Stress Management</option>
              <option>Relationship Counselling</option>
            </select>
          </div>

          <div>
            <label className="block mb-1">Preferred Date</label>

            <input
              type="date"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-1">Preferred Time</label>

            <input
              type="time"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-1">Additional Notes</label>

            <textarea
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full"
          >
            {loading ? "Booking..." : "Book Appointment"}
          </button>

        </form>

      </div>

    </div>
  );
}