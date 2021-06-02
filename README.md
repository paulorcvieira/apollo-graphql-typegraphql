# TypeScript, Graphql, Type-GraphQL

## Start project
```bash
yarn && yarn dev
```

## List

```graphql
{
  videos {
    title description category
  }
}
```

## Insert

```graphql
mutation {
  addVideo(
    videoInput: {
      description: "Ótimo filme"
      title: "Rambo"
      category: "Ação"
    }
  ) {
    title category description
  }
}
```
