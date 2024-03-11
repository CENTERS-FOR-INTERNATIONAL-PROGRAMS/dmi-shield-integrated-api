import { slugify } from '../../utils/helpers';
import { Doc503Input, Doc503Output } from '../models/Document503';
import DocumentRepository from '../repositories/DocumentRepository';
import { DocSariInput, DocSariOutput } from '../models/DocumentSari';
import DocumentMdharura, { DocumentMdharuraInput } from '../models/DocumentMdharura';
import DocumentMdharuraIndicators, { DocumentMdharuraIndicatorsInput } from '../models/DocumentMdharuraIndicators';

interface IDocumentService {
  createDocument(payload: Doc503Input): Promise<Doc503Output>;

  createSariDocument(payload: DocSariInput): Promise<DocSariOutput>;
}

class DocumentService implements IDocumentService {
  async createDocument(payload: Doc503Input): Promise<Doc503Output> {
    return DocumentRepository.createDocument({
      ...payload,
    });
  }

  async createSariDocument(payload: DocSariOutput): Promise<DocSariOutput> {
    return DocumentRepository.createSariDocument({
      ...payload,
    });
  }

  async createMdharuraDocument(payload: DocumentMdharuraInput): Promise<[DocumentMdharura, boolean]> {
    return DocumentRepository.createMdharuraDocument({
      ...payload,
    });
  }

  async bulkCreateOrUpdateMdharuraDocument(payload: DocumentMdharuraInput[]): Promise<DocumentMdharura[]> {
    return DocumentRepository.bulkCreateMdharuraDocument(payload);
  }

  async createMdharuraIndicatorsDocument(
    payload: DocumentMdharuraIndicatorsInput,
  ): Promise<[DocumentMdharuraIndicators, boolean]> {
    return DocumentRepository.createMdharuraIndicatorsDocument({
      ...payload,
    });
  }

  async bulkCreateOrUpdateMdharuraIndicatorsDocument(
    payload: DocumentMdharuraIndicatorsInput[],
  ): Promise<DocumentMdharuraIndicators[]> {
    return DocumentRepository.bulkCreateMdharuraIndicatorsDocument(payload);
  }
}

export default new DocumentService();
