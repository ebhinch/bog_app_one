
class Api::CreaturesController < ApplicationController
    # display all creatures
      def index
        # get all creatures from db and save to instance variable
        @creatures = Creature.all
    
        render json: @creatures
      end

      def create
        # when creating a creature, you're requiring it look like creature model and setting user able to set its name and description
 
        @creature = Creature.new(creature_params)

        # if the creature saves, render it as json
        if @creature.save
            render json: @creature
        end

    end


    def show
        creature_id = params[:id]
        @creature = Creature.find_by_id(creature_id)
        
        render json: @creature
        
    end

    def update
        creature_id = params[:id]
        @creature = Creature.find_by_id(creature_id)
   
        @creature.update_attributes(creature_params)

        render json: @creature
    
    end

    def destroy
        creature_id = params[:id]
        @creature = Creature.find_by_id(creature_id)
        @creature.destroy
        
        render json: {
            msg: "Successfully Deleted"
          }
    end



    private

        def creature_params
            params.require(:creature).permit(:name, :description)
        end

    end



 