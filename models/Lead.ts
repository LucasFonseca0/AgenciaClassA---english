import mongoose, { Document, Model, Schema } from 'mongoose';

interface ILead extends Document {
  name: string;
  email: string;
  phone: string;
  subject?: string;
  date: Date;
}

const LeadSchema: Schema<ILead> = new Schema({
  name: {
    type: String,
    required: [true, 'Por favor, insira seu nome'],
  },
  email: {
    type: String,
    required: [true, 'Por favor, insira seu email'],
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Por favor, insira um endereço de email válido',
    ],
  },
  phone: {
    type: String,
    required: [true, 'Por favor, insira seu telefone'],
  },
  subject: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Lead: Model<ILead> = mongoose.models.Lead || mongoose.model<ILead>('Lead', LeadSchema);

export default Lead;
