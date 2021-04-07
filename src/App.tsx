import React from 'react';
import './App.scss'
import { Filter } from "./components/Filter"
import { TodoList } from "./components/TodoList"
import { AddTodo } from "./components/AddTodo"
import { useTodos } from './hooks/useTodos';
import { useFilter } from "./hooks/useFilter"
import { useAppState } from "./hooks/useAppState" 
import { Loading } from "./components/common/Loading"

import { Wrapper } from "./components/common/Wrapper"
import { TodoListStyled } from "./components/common/TodoListStyled"

function App() {
  const { todos } = useTodos()
  const { filter } = useFilter()
  const { isLoading } = useAppState()

  return (
    <Wrapper>
      <div className="App">          
          {isLoading && <Loading />}
            <>
                <AddTodo />
                <TodoListStyled>
                  <TodoList filter={filter} todos={todos} />
                  <Filter filter={filter} />
                </TodoListStyled>
            </>
      </div>
    </Wrapper>
  );
}

export default App;

