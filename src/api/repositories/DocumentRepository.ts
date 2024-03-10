import DocumentMdharura, { DocumentMdharuraInput } from '../models/DocumentMdharura';

import DocumentMdharuraIndicators, { DocumentMdharuraIndicatorsInput } from '../models/DocumentMdharuraIndicators';
import Document503, { Doc503Input, Doc503Output } from '../models/Document503';
import DocumentSari, { DocSariInput, DocSariOutput } from '../models/DocumentSari';

interface IDocumentRepository {
  createDocument(payload: Doc503Input): Promise<Doc503Output>;
  // getRoles(): Promise<RoleOutput[]>;
  // getRoleBySlug(slug: string): Promise<RoleOutput | null>;
}

class DocumentRepository implements IDocumentRepository {
  createDocument(payload: Doc503Input): Promise<Doc503Output> {
    return Document503.create(payload);
  }

  createSariDocument(payload: DocSariInput): Promise<DocSariOutput> {
    return DocumentSari.create(payload);
  }

  createMdharuraDocument(payload: DocumentMdharuraInput): Promise<[DocumentMdharura, boolean]> {
    return DocumentMdharura.upsert(payload, { conflictFields: ['_ID'] });
  }

  bulkCreateMdharuraDocument(payload: DocumentMdharuraInput[]): Promise<DocumentMdharura[]> {
    let updateFields = Object.keys(DocumentMdharura.getAttributes());
    updateFields = updateFields.filter((field) => ['id', 'createdAt'].includes(field) == false);

    return DocumentMdharura.bulkCreate(payload, {
      updateOnDuplicate: updateFields as (keyof DocumentMdharuraInput)[],
      conflictAttributes: ['_ID'],
    });
  }

  createMdharuraIndicatorsDocument(
    payload: DocumentMdharuraIndicatorsInput,
  ): Promise<[DocumentMdharuraIndicators, boolean]> {
    return DocumentMdharuraIndicators.upsert(payload, { conflictFields: ['UNIT_ID', 'DATE_START', 'DATE_END'] });
  }

  bulkCreateMdharuraIndicatorsDocument(
    payload: DocumentMdharuraIndicatorsInput[],
  ): Promise<DocumentMdharuraIndicators[]> {
    let updateFields = Object.keys(DocumentMdharuraIndicators.getAttributes());
    updateFields = updateFields.filter((field) => ['id', 'createdAt'].includes(field) == false);

    return DocumentMdharuraIndicators.bulkCreate(payload, {
      updateOnDuplicate: updateFields as (keyof DocumentMdharuraIndicatorsInput)[],
      conflictAttributes: ['UNIT_ID', 'DATE_START', 'DATE_END'],
    });
  }
}

export default new DocumentRepository();
