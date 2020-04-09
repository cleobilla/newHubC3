import http from "./http-common";

class ProdutoDataService {
  get(id) {
    return http.get(`/empresa/produto/${id}`);
  }

  create(data) {
    return http.post("/empresa/produto", data);
  }

  update(id, data) {
    return http.put(`/empresa/produto/${id}`, data);
  }

  delete(id) {
    return http.delete(`/empresa/produto/${id}`);
  }

  deleteAll() {
    return http.delete(`/empresa/produto`);
  }

  findByNome(nome) {
    return http.get(`/empresa/produto?nome=${nome}`);
  }
}

export default new ProdutoDataService();
  