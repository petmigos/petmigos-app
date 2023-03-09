import { ip } from "../../entities/ip";

  
  
async function fetchCompaniesItem(companyId: string) {
  try {
      const response = await fetch(`http://${ip}:3333/companies`);
      const data = await response.json();
      console.log("data: "+ data)
      return data.map(company => ({ name: company.name, _id: company._id, category: company.category }));
    } catch (error) {
      console.error("ERROR: " + error);
      return [];
    }
}

async function fetch() {
      const result = await fetchAll.execute(
        `http://${ip}:3333/companies/6409f16c60e618dd9cf39457/items`
      );
      console.log("teste:" + result);
      setItems(result);
    }

    fetch(
