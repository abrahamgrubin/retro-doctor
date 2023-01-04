/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBlog = /* GraphQL */ `
  query GetBlog($id: ID!) {
    getBlog(id: $id) {
      id
      name
      posts {
        items {
          id
          title
          createdAt
          updatedAt
          blogPostsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listBlogs = /* GraphQL */ `
  query ListBlogs(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      blog {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          postCommentsId
        }
        nextToken
      }
      createdAt
      updatedAt
      blogPostsId
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        blog {
          id
          name
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        blogPostsId
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      post {
        id
        title
        blog {
          id
          name
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        blogPostsId
      }
      content
      createdAt
      updatedAt
      postCommentsId
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        post {
          id
          title
          createdAt
          updatedAt
          blogPostsId
        }
        content
        createdAt
        updatedAt
        postCommentsId
      }
      nextToken
    }
  }
`;
export const getRetro = /* GraphQL */ `
  query GetRetro($id: ID!) {
    getRetro(id: $id) {
      title
      creator {
        retros {
          nextToken
        }
        username
        accountID
        id
        createdAt
        updatedAt
      }
      participants {
        items {
          username
          accountID
          id
          createdAt
          updatedAt
          retroParticipantsId
        }
        nextToken
      }
      template {
        name
        slug
        columns {
          nextToken
        }
        id
        createdAt
        updatedAt
      }
      id
      createdAt
      updatedAt
      creatorRetrosId
      retroCreatorId
      retroTemplateId
    }
  }
`;
export const listRetros = /* GraphQL */ `
  query ListRetros(
    $filter: ModelRetroFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRetros(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        title
        creator {
          username
          accountID
          id
          createdAt
          updatedAt
        }
        participants {
          nextToken
        }
        template {
          name
          slug
          id
          createdAt
          updatedAt
        }
        id
        createdAt
        updatedAt
        creatorRetrosId
        retroCreatorId
        retroTemplateId
      }
      nextToken
    }
  }
`;
export const getTemplate = /* GraphQL */ `
  query GetTemplate($id: ID!) {
    getTemplate(id: $id) {
      name
      slug
      columns {
        items {
          title
          subtitle
          id
          createdAt
          updatedAt
          templateColumnsId
        }
        nextToken
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const listTemplates = /* GraphQL */ `
  query ListTemplates(
    $filter: ModelTemplateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTemplates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        name
        slug
        columns {
          nextToken
        }
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getColumn = /* GraphQL */ `
  query GetColumn($id: ID!) {
    getColumn(id: $id) {
      title
      subtitle
      template {
        name
        slug
        columns {
          nextToken
        }
        id
        createdAt
        updatedAt
      }
      id
      createdAt
      updatedAt
      templateColumnsId
    }
  }
`;
export const listColumns = /* GraphQL */ `
  query ListColumns(
    $filter: ModelColumnFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listColumns(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        title
        subtitle
        template {
          name
          slug
          id
          createdAt
          updatedAt
        }
        id
        createdAt
        updatedAt
        templateColumnsId
      }
      nextToken
    }
  }
`;
export const getParticipant = /* GraphQL */ `
  query GetParticipant($id: ID!) {
    getParticipant(id: $id) {
      username
      accountID
      retro {
        title
        creator {
          username
          accountID
          id
          createdAt
          updatedAt
        }
        participants {
          nextToken
        }
        template {
          name
          slug
          id
          createdAt
          updatedAt
        }
        id
        createdAt
        updatedAt
        creatorRetrosId
        retroCreatorId
        retroTemplateId
      }
      notes {
        items {
          content
          id
          createdAt
          updatedAt
          participantNotesId
        }
        nextToken
      }
      id
      createdAt
      updatedAt
      retroParticipantsId
    }
  }
`;
export const listParticipants = /* GraphQL */ `
  query ListParticipants(
    $filter: ModelParticipantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listParticipants(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        username
        accountID
        retro {
          title
          id
          createdAt
          updatedAt
          creatorRetrosId
          retroCreatorId
          retroTemplateId
        }
        notes {
          nextToken
        }
        id
        createdAt
        updatedAt
        retroParticipantsId
      }
      nextToken
    }
  }
`;
export const getCreator = /* GraphQL */ `
  query GetCreator($id: ID!) {
    getCreator(id: $id) {
      retros {
        items {
          title
          id
          createdAt
          updatedAt
          creatorRetrosId
          retroCreatorId
          retroTemplateId
        }
        nextToken
      }
      username
      accountID
      id
      createdAt
      updatedAt
    }
  }
`;
export const listCreators = /* GraphQL */ `
  query ListCreators(
    $filter: ModelCreatorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCreators(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        retros {
          nextToken
        }
        username
        accountID
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      content
      participant {
        username
        accountID
        retro {
          title
          id
          createdAt
          updatedAt
          creatorRetrosId
          retroCreatorId
          retroTemplateId
        }
        notes {
          nextToken
        }
        id
        createdAt
        updatedAt
        retroParticipantsId
      }
      column {
        title
        subtitle
        template {
          name
          slug
          id
          createdAt
          updatedAt
        }
        id
        createdAt
        updatedAt
        templateColumnsId
      }
      id
      createdAt
      updatedAt
      participantNotesId
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        content
        participant {
          username
          accountID
          id
          createdAt
          updatedAt
          retroParticipantsId
        }
        column {
          title
          subtitle
          id
          createdAt
          updatedAt
          templateColumnsId
        }
        id
        createdAt
        updatedAt
        participantNotesId
      }
      nextToken
    }
  }
`;
