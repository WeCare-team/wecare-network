import React, { useState, useRef } from 'react'
import { useSearch } from '../../hooks/useSearch'
import Hovering from '../Hovering/Hovering'
import { TextField, InputAdornment } from '@material-ui/core'
import UserList from '../UserList/UserList'
import './SearchBar.css'
import SearchIcon from '@material-ui/icons/Search'

const SearchBar = () => {
  const { search, results, clear } = useSearch()
  const [query, setQuery] = useState('')
  const ref = useRef({ getBoundingClientRect: () => ({ x: 0, y: 0 }) })
  return (
    <div className='flex a-center' ref={ref}>
      <form
        onSubmit={e => {
          e.preventDefault()
          search(query)
        }}
      >
        <TextField
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder='Search...'
          variant='outlined'
          size='small'
          style={{ width: 300 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon style={{ color: 'grey' }} />
              </InputAdornment>
            ),
          }}
        />
      </form>
      {results.length > 0 && (
        <Hovering element={ref} onDismiss={clear}>
          <UserList users={results} />
        </Hovering>
      )}
    </div>
  )
}

export default SearchBar
