import { DiskSpace } from '@/store/interfaces';
import axios from 'axios';

export default {
  user: {
    login: (credentials: User) => axios.post('/api/auth', { credentials }).then((res) => res.data.user),
    register: (user: User) => axios.post('/api/users', { user }).then((res) => res.data.user),
    confirm: (token: string) => axios.post('/api/auth/confirmation', { token }).then((res) => res.data.user),
    resendConfirmation: (email: string) => axios.post('/api/auth/resend_confirmation', { email }),
    resetPasswordRequest: (email: string) => axios.post('/api/auth/reset_password_request', { email }),
    validateToken: (token: string) => axios.post('/api/auth/validate_token', { token }),
    resetPassword: (data: any) => axios.post('/api/auth/reset_password', { data }),
    fetchCurrentUser: () => axios.get('/api/users/@me').then((res) => res.data.user),
  },
  deck: {
    create: (deck: Deck) => axios.post('/api/decks', { deck }).then((res) => res.data.deck),
    getOne: (deckId: string) => axios.get(`/api/decks/${deckId}`).then((res) => res.data.deck),
    update: (deck: { _id: string }) => axios.put(`/api/decks/${deck._id}`, { deck }).then((res) => res.data.deck),
    delete: (deckId: string) => axios.delete(`/api/decks/${deckId}`).then((res) => res.data.deck),
    invite: (deckId: string) => axios.get(`/api/decks/${deckId}/invite`).then((res) => res.data.invitation),
  },
  diskSpace: {
    create: (diskSpace: DiskSpace) => axios.post('/api/diskspaces', { diskSpace }).then((res) => res.data.diskSpace),
    getOne: (diskSpaceId: string) => axios.get(`/api/diskspaces/${diskSpaceId}`).then((res) => res.data.diskSpace),
    update: (diskSpace: { _id: string }) =>
      axios.put(`/api/diskspaces/${diskSpace._id}`, { diskSpace }).then((res) => res.data.diskSpace),
    delete: (diskSpaceId: string) => axios.delete(`/api/diskspaces/${diskSpaceId}`).then((res) => res.data.diskSpace),
    // TODO:  `/api/decks/${deckId}/diskSpaces`
    fetchDeckDiskSpaces: (deckId: string) =>
      axios.get(`/api/diskspaces/deck/${deckId}`).then((res) => res.data.diskSpaces),
  },
  message: {
    create: (message: Message) => axios.post('/api/messages', { message }).then((res) => res.data.message),
    update: (message: { _id: string }) =>
      axios.put(`/api/messages/${message._id}`, { message }).then((res) => res.data.message),
    delete: (messageId: string) => axios.delete(`/api/messages/${messageId}`).then((res) => res.data.message),
    // TODO: `/api/diskSpaces/${diskSpaceId}/messages`
    fetchDiskSpaceMessages: (diskSpaceId: string) =>
      axios.get(`/api/messages/diskSpace/${diskSpaceId}`).then((res) => res.data.messages),
  },
  membership: {
    create: (invitation: string) => axios.post('/api/memberships', { invitation }).then((res) => res.data.membership),
    fetchMemberDecks: () => axios.get('/api/memberships/@me/decks'),
    fetchDeckMembers: (deckId: string) => axios.get(`/api/memberships/${deckId}/members`),
  },
  subscription: {
    fetchSshDiskSpaces: () => axios.get(`/api/subscriptions/@me/diskspaces`).then((res) => res.data.diskSpaces),
    fetchDiskSpaceSubscribers: (diskSpaceId: string) =>
      axios.get(`/api/subscriptions/${diskSpaceId}/subscribers`).then((res) => res.data.subscribers),
  },
};
