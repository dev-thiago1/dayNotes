const Annotations = require('../models/AnnotationData')



module.exports = {
    async read(request, response){
        const priority = request.query
        
        const priorityNotes = await Annotations.find(priority)
        return response.json(priorityNotes)
    },

    async update(request, response){
        const { id } = request.params;

        const annotation = await Annotations.findOne({ _id: id})

        if(annotation.priority){
            annotation.priority = false;
        }else{
            annotation.priority = true;
        }

        await annotation.save()

        return response.json(annotation);
    }
}