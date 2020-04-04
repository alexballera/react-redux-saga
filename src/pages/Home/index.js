import React, { useState } from 'react'
import {Container, Typography, Card, Grid, TextField, Button} from '@material-ui/core'
import styles from './style'

export default () => {
	const [searchText, setSearchText] = useState('')
	const classes = styles()

	const handleSearchTextChange = event => {
		setSearchText(event.target.value)
	}
	
	const handleCleanTextClick = event => {
		console.log('10')
	}
	const handleSearchTextClick = event => {
		console.log('10')
	}
	return (
	<Container className={classes.container}>
		<Card className={classes.cardContainer}>
			<Grid container className={classes.titleGridContainer}>
				<Grid>
					<Typography variant="h4" className={classes.title}>
						Bienvenido!
					</Typography>
				</Grid>
				<Grid>
					<label>Icono</label>
				</Grid>
			</Grid>
			<TextField
			value={searchText}
			placeholder="Buscar..."
			onChange={handleSearchTextChange}
			className={classes.textFieldSearch}
			/>
			<Grid className={classes.buttonsContainer}>
				<Button variant="contained" onClick={handleCleanTextClick}>Limpiar</Button>
				<Button variant="contained" onClick={handleSearchTextClick} className={classes.searchButton} color="primary" size="large">Buscar</Button>
			</Grid>
		</Card>
	</Container>
)}