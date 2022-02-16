import moongose from 'mongoose'

const connectDB = async () => {
	try {
		const conn = await moongose.connect(process.env.DB_URI as string)

		console.log(`Database connected: ${conn.connection.host}`)
	} catch (e) {
		console.log(e)
		process.exit(1)
	}
}

export default connectDB