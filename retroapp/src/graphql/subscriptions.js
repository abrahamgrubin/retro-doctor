/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog($filter: ModelSubscriptionBlogFilterInput) {
    onCreateBlog(filter: $filter) {
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
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog($filter: ModelSubscriptionBlogFilterInput) {
    onUpdateBlog(filter: $filter) {
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
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog($filter: ModelSubscriptionBlogFilterInput) {
    onDeleteBlog(filter: $filter) {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
    onCreatePost(filter: $filter) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
    onUpdatePost(filter: $filter) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
    onDeletePost(filter: $filter) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
    onCreateComment(filter: $filter) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
    onUpdateComment(filter: $filter) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
    onDeleteComment(filter: $filter) {
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
export const onCreateRetro = /* GraphQL */ `
  subscription OnCreateRetro($filter: ModelSubscriptionRetroFilterInput) {
    onCreateRetro(filter: $filter) {
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
export const onUpdateRetro = /* GraphQL */ `
  subscription OnUpdateRetro($filter: ModelSubscriptionRetroFilterInput) {
    onUpdateRetro(filter: $filter) {
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
export const onDeleteRetro = /* GraphQL */ `
  subscription OnDeleteRetro($filter: ModelSubscriptionRetroFilterInput) {
    onDeleteRetro(filter: $filter) {
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
export const onCreateParticipant = /* GraphQL */ `
  subscription OnCreateParticipant(
    $filter: ModelSubscriptionParticipantFilterInput
  ) {
    onCreateParticipant(filter: $filter) {
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
export const onUpdateParticipant = /* GraphQL */ `
  subscription OnUpdateParticipant(
    $filter: ModelSubscriptionParticipantFilterInput
  ) {
    onUpdateParticipant(filter: $filter) {
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
export const onDeleteParticipant = /* GraphQL */ `
  subscription OnDeleteParticipant(
    $filter: ModelSubscriptionParticipantFilterInput
  ) {
    onDeleteParticipant(filter: $filter) {
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
export const onCreateCreator = /* GraphQL */ `
  subscription OnCreateCreator($filter: ModelSubscriptionCreatorFilterInput) {
    onCreateCreator(filter: $filter) {
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
export const onUpdateCreator = /* GraphQL */ `
  subscription OnUpdateCreator($filter: ModelSubscriptionCreatorFilterInput) {
    onUpdateCreator(filter: $filter) {
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
export const onDeleteCreator = /* GraphQL */ `
  subscription OnDeleteCreator($filter: ModelSubscriptionCreatorFilterInput) {
    onDeleteCreator(filter: $filter) {
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
export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote($filter: ModelSubscriptionNoteFilterInput) {
    onCreateNote(filter: $filter) {
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
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote($filter: ModelSubscriptionNoteFilterInput) {
    onUpdateNote(filter: $filter) {
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
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote($filter: ModelSubscriptionNoteFilterInput) {
    onDeleteNote(filter: $filter) {
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
