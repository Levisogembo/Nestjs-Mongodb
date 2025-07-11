import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class userSettingsSchema {
    @Prop({ required: false })
    receiveNotifactions?: boolean;

    @Prop({ required: false })
    receiveSms?: boolean;

    @Prop({ required: false })
    receiveEmail?: boolean;
}

export const UserSettingsSchema = SchemaFactory.createForClass(userSettingsSchema);