# Serviços

São classes que interagem (fazem requisições HTTP via axios) diretamente com a
API do projeto. Elas devem ter o código das requisições feitas pelo aplicativo.
Um exemplo de um serviço é **o serviço de usuário**:

```ts
class UserService {
  login(username: string, password: string): UserAuthenticated {
    // ... requisição para o backend
  }

  create(newUser: User): boolean {
    // ... requisição para o backend
  }
}
```
