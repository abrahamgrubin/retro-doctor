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
export const onCreateTemplate = /* GraphQL */ `
  subscription OnCreateTemplate($filter: ModelSubscriptionTemplateFilterInput) {
    onCreateTemplate(filter: $filter) {
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
export const onUpdateTemplate = /* GraphQL */ `
  subscription OnUpdateTemplate($filter: ModelSubscriptionTemplateFilterInput) {
    onUpdateTemplate(filter: $filter) {
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
export const onDeleteTemplate = /* GraphQL */ `
  subscription OnDeleteTemplate($filter: ModelSubscriptionTemplateFilterInput) {
    onDeleteTemplate(filter: $filter) {
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
export const onCreateColumn = /* GraphQL */ `
  subscription OnCreateColumn($filter: ModelSubscriptionColumnFilterInput) {
    onCreateColumn(filter: $filter) {
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
export const onUpdateColumn = /* GraphQL */ `
  subscription OnUpdateColumn($filter: ModelSubscriptionColumnFilterInput) {
    onUpdateColumn(filter: $filter) {
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
export const onDeleteColumn = /* GraphQL */ `
  subscription OnDeleteColumn($filter: ModelSubscriptionColumnFilterInput) {
    onDeleteColumn(filter: $filter) {
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
export const onCreateCreator = /* GraphQL */ `
  subscription OnCreateCreator($filter: ModelSubscriptionCreatorFilterInput) {
    onCreateCreator(filter: $filter) {
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
export const onUpdateCreator = /* GraphQL */ `
  subscription OnUpdateCreator($filter: ModelSubscriptionCreatorFilterInput) {
    onUpdateCreator(filter: $filter) {
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
export const onDeleteCreator = /* GraphQL */ `
  subscription OnDeleteCreator($filter: ModelSubscriptionCreatorFilterInput) {
    onDeleteCreator(filter: $filter) {
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
export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote($filter: ModelSubscriptionNoteFilterInput) {
    onCreateNote(filter: $filter) {
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
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote($filter: ModelSubscriptionNoteFilterInput) {
    onUpdateNote(filter: $filter) {
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
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote($filter: ModelSubscriptionNoteFilterInput) {
    onDeleteNote(filter: $filter) {
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
