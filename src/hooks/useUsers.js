import {useMemo} from "react";

export const useSortedUsers = (users, sort) => {
    const sortedUsers = useMemo(() => {
        if(sort === 'name') {
          return [...users].sort((a,b) => a[sort].localeCompare(b[sort]))
        } 
        else if (sort === 'id') {
            return [...users].sort((a,b) => a[sort] - b[sort])
        } 
        return users
        
    }, [sort, users])

    return sortedUsers;
}

export const useUsers = (users, sort, query) => {
    const sortedUsers = useSortedUsers(users, sort)

    const sortedAndSearchUsers = useMemo(() => {
        return sortedUsers.filter(user => user.name.toLowerCase().includes(query.toLowerCase()) ||  user.phone.toLowerCase().includes(query.toLowerCase()) || user.email.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedUsers])
    
    return sortedAndSearchUsers
}