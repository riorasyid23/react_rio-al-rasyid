import axiosInstance from "../config/axiosInstance";

const TodoAPI = {
  async getAllTodos() {
    try {
      const response = await axiosInstance.get(`/todolist`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  async createTodo(data) {
    try {
      const response = await axiosInstance.post("/todolist", data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async deleteTodo(id) {
    try {
      const response = await axiosInstance.delete(`/todolist/${id}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async updateTodo(id) {
    try {
      const response = await axiosInstance.put(`/todolist/${id}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
};

export default TodoAPI;
