import http from "./http-common";

class EmpresaDataService {
  getAll() {
    return http.get("/empresas");
  }
  getEmpresaNome(id){
     return http.get(`/empresas/${id}`);
  }
  getAllProdutos(id) {
    return http.get(`/empresa/${id}`);
  }
}

export default new EmpresaDataService();
