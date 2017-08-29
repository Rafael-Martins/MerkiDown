import firebase from 'firebase';
import hash from './hash';
import { config } from './apiKeys';

// Initialize Firebase


firebase.initializeApp(config);

const database = firebase.database();

export default {
  publish(contentHtml, contentMd) {
    const filesRef = database.ref().child('files').push();
    const hashGenerated = hash();
    const hashRef = database.ref().child(`hash/${hashGenerated}`);

    filesRef.set({ contentHtml, contentMd });
    hashRef.set(filesRef.key);
    return {
      publishKey: filesRef.key,
      editHash: hashGenerated,
    };
  },
  save(contentHtml, contentMd, saveId) {
    const filesRef = database.ref().child(`files/${saveId}`);
    filesRef.update({ contentHtml, contentMd });
  },
  getEditContent(editKey) {
    let contentKey = '';
    const refHashUrl = database.ref(`hash/${editKey}`);
    return new Promise((resolve, reject) => {
      refHashUrl.once('value', (hashSnapshot) => {
        contentKey = hashSnapshot.val();
        const refContentUrl = database.ref(`files/${contentKey}`);
        refContentUrl.once('value', (contentSnapshot) => {
          if (!contentSnapshot || !contentSnapshot.val()) {
            reject('Error');
            return;
          }
          resolve({
            htmlValue: contentSnapshot.val().contentHtml,
            mdValue: contentSnapshot.val().contentMd,
            publishKey: refContentUrl.key,
            saveId: refContentUrl.key,
            editKey,
          });
        });
      });
    });
  },
  showSaved(publishedUrl) {
    const ref = database.ref(`files/${publishedUrl}`);
    return new Promise((resolve, reject) => {
      ref.once('value', (snapshot) => {
        if (!snapshot || !snapshot.val()) {
          reject('Error');
          return;
        }
        resolve(snapshot.val().contentHtml);
      });
    });
  },
};
