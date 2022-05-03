const Annotations = require('../models/AnnotationData')



module.exports = {

   async read(request, response){
       const AnnotationList = await Annotations.find()
       return response.json(AnnotationList)
    },





   async create(request, response){
    const { title, notes, priority} = request.body;

        if(!title || !notes){
            return response.status(400).json({ error: "Necessário um titulo/anotação"})
        }
        
        const annotationCreated = await Annotations.create({
            title,
            notes,
            priority
        })
        return response.json(annotationCreated)
    },

   async delete(request, response){
        const { id } = request.params;
        const annotationDeleted = await Annotations.findOneAndDelete({ _id: id})


        if(annotationDeleted){
            return response.json(annotationDeleted)
        }
        return response.status(401).json({ error: 'Não foi encontrado o registro para deletar!'})
    }
}