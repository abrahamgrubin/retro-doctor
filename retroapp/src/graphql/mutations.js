/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBlog = /* GraphQL */ `
  mutation CreateBlog(
    $input: CreateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    createBlog(input: $input, condition: $condition) {
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
export const updateBlog = /* GraphQL */ `
  mutation UpdateBlog(
    $input: UpdateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    updateBlog(input: $input, condition: $condition) {
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
export const deleteBlog = /* GraphQL */ `
  mutation DeleteBlog(
    $input: DeleteBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    deleteBlog(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createRetro = /* GraphQL */ `
  mutation CreateRetro(
    $input: CreateRetroInput!
    $condition: ModelRetroConditionInput
  ) {
    createRetro(input: $input, condition: $condition) {
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
      notes {
        items {
          content
          id
          createdAt
          updatedAt
          retroNotesId
        }
        nextToken
      }
      template
      id
      createdAt
      updatedAt
      creatorRetrosId
      retroCreatorId
    }
  }
`;
export const updateRetro = /* GraphQL */ `
  mutation UpdateRetro(
    $input: UpdateRetroInput!
    $condition: ModelRetroConditionInput
  ) {
    updateRetro(input: $input, condition: $condition) {
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
      notes {
        items {
          content
          id
          createdAt
          updatedAt
          retroNotesId
        }
        nextToken
      }
      template
      id
      createdAt
      updatedAt
      creatorRetrosId
      retroCreatorId
    }
  }
`;
export const deleteRetro = /* GraphQL */ `
  mutation DeleteRetro(
    $input: DeleteRetroInput!
    $condition: ModelRetroConditionInput
  ) {
    deleteRetro(input: $input, condition: $condition) {
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
      notes {
        items {
          content
          id
          createdAt
          updatedAt
          retroNotesId
        }
        nextToken
      }
      template
      id
      createdAt
      updatedAt
      creatorRetrosId
      retroCreatorId
    }
  }
`;
export const createParticipant = /* GraphQL */ `
  mutation CreateParticipant(
    $input: CreateParticipantInput!
    $condition: ModelParticipantConditionInput
  ) {
    createParticipant(input: $input, condition: $condition) {
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
        notes {
          nextToken
        }
        template
        id
        createdAt
        updatedAt
        creatorRetrosId
        retroCreatorId
      }
      id
      createdAt
      updatedAt
      retroParticipantsId
    }
  }
`;
export const updateParticipant = /* GraphQL */ `
  mutation UpdateParticipant(
    $input: UpdateParticipantInput!
    $condition: ModelParticipantConditionInput
  ) {
    updateParticipant(input: $input, condition: $condition) {
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
        notes {
          nextToken
        }
        template
        id
        createdAt
        updatedAt
        creatorRetrosId
        retroCreatorId
      }
      id
      createdAt
      updatedAt
      retroParticipantsId
    }
  }
`;
export const deleteParticipant = /* GraphQL */ `
  mutation DeleteParticipant(
    $input: DeleteParticipantInput!
    $condition: ModelParticipantConditionInput
  ) {
    deleteParticipant(input: $input, condition: $condition) {
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
        notes {
          nextToken
        }
        template
        id
        createdAt
        updatedAt
        creatorRetrosId
        retroCreatorId
      }
      id
      createdAt
      updatedAt
      retroParticipantsId
    }
  }
`;
export const createCreator = /* GraphQL */ `
  mutation CreateCreator(
    $input: CreateCreatorInput!
    $condition: ModelCreatorConditionInput
  ) {
    createCreator(input: $input, condition: $condition) {
      retros {
        items {
          title
          template
          id
          createdAt
          updatedAt
          creatorRetrosId
          retroCreatorId
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
export const updateCreator = /* GraphQL */ `
  mutation UpdateCreator(
    $input: UpdateCreatorInput!
    $condition: ModelCreatorConditionInput
  ) {
    updateCreator(input: $input, condition: $condition) {
      retros {
        items {
          title
          template
          id
          createdAt
          updatedAt
          creatorRetrosId
          retroCreatorId
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
export const deleteCreator = /* GraphQL */ `
  mutation DeleteCreator(
    $input: DeleteCreatorInput!
    $condition: ModelCreatorConditionInput
  ) {
    deleteCreator(input: $input, condition: $condition) {
      retros {
        items {
          title
          template
          id
          createdAt
          updatedAt
          creatorRetrosId
          retroCreatorId
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
export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
      content
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
        notes {
          nextToken
        }
        template
        id
        createdAt
        updatedAt
        creatorRetrosId
        retroCreatorId
      }
      id
      createdAt
      updatedAt
      retroNotesId
    }
  }
`;
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
      content
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
        notes {
          nextToken
        }
        template
        id
        createdAt
        updatedAt
        creatorRetrosId
        retroCreatorId
      }
      id
      createdAt
      updatedAt
      retroNotesId
    }
  }
`;
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
      content
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
        notes {
          nextToken
        }
        template
        id
        createdAt
        updatedAt
        creatorRetrosId
        retroCreatorId
      }
      id
      createdAt
      updatedAt
      retroNotesId
    }
  }
`;
