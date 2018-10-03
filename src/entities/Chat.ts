import {
    BaseEntity,
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn
} from "typeorm";



@Entity()
class Chat extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id: number;
    
    
    @CreateDateColumn()
    createAt: string;
    
    @UpdateDateColumn()
    updateAt: string;
    
};

export default Chat;