const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			url: 'https://playground.4geeks.com/contact/',
			selected: null,
			contacts: null
		},
		actions: {
			createAgenda: async () => {
				try {
					const response = await fetch(getStore().url+'/agendas/sebas', {
						method: 'POST'
					});
					if(!response.ok) throw new Error('error while creating agenda')
					const data = await response.json()
					getActions().getUserAgenda()
					return true
				} catch (error) {
					console.log(error)
				}
			},
			createContact: async (contact) => {
				try {
					const response = await fetch(getStore().url+'/agendas/sebas/contacts', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(contact)
					});
					if(!response.ok) throw new Error('error while creating contact')
					return getActions().getUserAgenda()
				} catch (error) {
					console.log(error)
				}
			},
			getUserAgenda: async () => {
				try {
					const response = await fetch(getStore().url+'/agendas/sebas');
					if (response.status===404) return getActions().createAgenda()
					if(!response.ok) throw new Error('error while retrieving user')
					const data = await response.json()
					setStore({contacts: data})
					return true
				} catch (error) {
					console.log(error)
				}
			},
			updateContact: async (id, contact) => {
				try {
					const response = await fetch(getStore().url+'/agendas/sebas/contacts/'+id, {
						method: 'PUT',
						headers: {
							'Content Type': 'application/json'
						} ,
						body: JSON.stringify(contact)
					});
					if(!response.ok) throw new Error('error while updating user')
					const data = await response.json()
					return data
				} catch (error) {
					console.log(error)
				}
			},
			deleteContact: async (id) => {
				try {
					const response = await fetch(getStore().url+'/agendas/sebas/contacts/'+id);
					if(!response.ok) throw new Error('error while deleting user')
					const data = await response.json()
					return data
				} catch (error) {
					console.log(error)  
				}
			}
		}
	};
};

export default getState;
