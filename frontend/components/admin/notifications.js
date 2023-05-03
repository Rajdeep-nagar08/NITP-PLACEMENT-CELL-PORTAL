import { useState, useEffect } from "react";
import axios from "axios";
import { FaTrash } from "react-icons/fa";

const Notifications = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    axios.get("/api/notifications").then((res) => {
      setNotifications(res.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/api/notifications", {
        title,
        description,
      })
      .then((res) => {
        setNotifications([...notifications, res.data]);
        setTitle("");
        setDescription("");
      });
  };

  const handleDelete = (id) => {
    axios.delete(`/api/notifications/${id}`).then(() => {
      setNotifications(notifications.filter((n) => n.id !== id));
    });
  };

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">Add Notification</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
              Title
            </label>
            <input
              className="border rounded-lg py-2 px-3 w-full"
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              className="border rounded-lg py-2 px-3 w-full"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            type="submit"
          >
            Add
          </button>
        </form>
        <h1 className="text-2xl font-bold my-8">Existing Notifications</h1>
        <ul className="mb-4">
          {notifications && notifications.map((n) => (
            <li key={n.id} className="mb-2">
              <div className="flex justify-between items-center border border-gray-400 rounded-lg p-3">
                <div>
                  <h2 className="text-lg font-bold">{n.title}</h2>
                  <p className="text-gray-700">{n.description}</p>
                </div>
                <button
                  onClick={() => handleDelete(n.id)}
                  className="text-red-600 hover:text-red-700"
                >
                  <FaTrash />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Notifications;
