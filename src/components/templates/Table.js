import React, {useState} from 'react';

import {Table, Button, Card, InputGroup, FormControl} from 'react-bootstrap';
import { Check, TrashFill, Exclamation } from 'react-bootstrap-icons';

export default props => {

    const [title, setTitle] = useState({value: '', url: ''});

    return (
        <>
            <h3>{props.title}</h3>
            {props.completed ?
                <Button variant="primary" style={{float: 'right', marginBottom: '-100%'}} size="sm" onClick={()=>props.deleteCompletedTasks()}>
                    Limpar tarefas concluídas
                </Button>
            : null
            }
            <Table striped hover responsive borderless>
                {props.tasks.length > 0 ? 
                    <>
                        <thead>
                            <tr>
                                <th>Status</th>
                                <th>Tarefa</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.tasks.map(task=>(
                                <tr key={task.url}>
                                    <td>{task.completed ? <Button onClick={()=>props.completeTask(task.url, false)} variant='success'><Check size='20'/></Button> : <Button onClick={()=>props.completeTask(task.url, true)} variant='warning'><Exclamation size='20'/></Button>}</td>
                                    {task.completed === false? 
                                    <InputGroup style={{width: '100%', marginTop: '12px'}}>
                                        <FormControl
                                            placeholder={task.title}
                                            onChange={e => setTitle({value: e.target.value, url: task.url})}
                                        />
                                        <InputGroup.Append>
                                        <Button variant="primary" disabled={title.url === task.url && title.value.length > 0 ? false : true} onClick={()=>props.editTask(task.url, title.value)}>Editar</Button>
                                        </InputGroup.Append>
                                    </InputGroup>
                                        : <td style={{textDecoration: 'line-through'}}><span style={{marginTop: '12px'}}>{task.title}</span></td>}
                                    {!task.completed ? <td><Button variant="danger" onClick={()=>props.deleteTask(task.url)}><TrashFill/></Button></td> : <td><Button variant="secondary" disabled><TrashFill/></Button></td>}
                                </tr>
                            ))}
                        </tbody>
                    </>
                : 
                    <Card>
                    <Card.Body>
                        <Card.Title id='Sobre'>Lista vazia</Card.Title>
                        <Card.Text>
                            Ops! Não existem tarefas {props.completed === true ? 'concluídas' : !props.completed ? 'em andamento' : ''} cadastradas :(
                        </Card.Text>
                    </Card.Body>
                    </Card>
                }
            </Table>
        </>
    )
}