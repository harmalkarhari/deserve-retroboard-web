import { instance } from './axios.config';

//TODO: seperate out code for rest endpoints and local storage

export const get = async (url: string) => {
  return await new Promise((resolve, reject) => {
    const key = url.substring(url.lastIndexOf('/'), url.length);
    const posts = JSON.parse(localStorage.getItem(key) || '[]');
    resolve(posts);
    // instance
    //   .get(url)
    //   .then(result => {
    //     if (result.status === 200) {
    //       resolve(result.data);
    //     } else {
    //       reject(result.data);
    //     }
    //   })
    //   .catch(error => {
    //     reject(error);
    //   });
  });
};

export const post = async (url: string, data: any) => {
  return await new Promise((resolve, reject) => {
    const key = url.substring(url.lastIndexOf('/'), url.length);
    const posts: any[] = JSON.parse(localStorage.getItem(key) || '[]');
    const newItem = { id: new Date().getTime().toString(), ...data };
    posts.push(newItem);
    localStorage.setItem(key, JSON.stringify(posts));
    resolve(newItem);
    // instance
    //   .post(url, data)
    //   .then(result => {
    //     if (result.status >= 200 && result.status < 300) {
    //       resolve(result.data);
    //     } else {
    //       reject(result.data);
    //     }
    //   })
    //   .catch(error => {
    //     reject(error);
    //   });
  });
};

export const put = async (url: string, data: any) => {
  return await new Promise((resolve, reject) => {
    const id = url.substring(url.lastIndexOf('/') + 1, url.length);
    const subUrl = url.substring(0, url.lastIndexOf('/'));
    const key = subUrl.substring(subUrl.lastIndexOf('/'), url.length);
    const posts: any[] = JSON.parse(localStorage.getItem(key) || '[]');
    let foundItem = posts.find((item: any) => item.id === id);
    if (!foundItem) {
      reject('not found' + id);
    }
    foundItem.text = data.text;
    localStorage.setItem(key, JSON.stringify(posts));
    resolve(foundItem);
    // instance
    //   .put(url, data)
    //   .then(result => {
    //     if (result.status === 200) {
    //       resolve(result.data);
    //     } else {
    //       reject(result.data);
    //     }
    //   })
    //   .catch(error => {
    //     reject(error);
    //   });
  });
};

export const remove = async (url: string) => {
  return await new Promise((resolve, reject) => {
    const id = url.substring(url.lastIndexOf('/') + 1, url.length);
    const subUrl = url.substring(0, url.lastIndexOf('/'));
    const key = subUrl.substring(subUrl.lastIndexOf('/'), url.length);
    const posts: any[] = JSON.parse(localStorage.getItem(key) || '[]');
    let filteredItems = posts.filter((item: any) => item.id !== id);
    if (filteredItems.length === posts.length) {
      reject('not found' + id);
    }
    localStorage.setItem(key, JSON.stringify(filteredItems));
    resolve({ id });
    // instance
    //   .delete(url, {
    //     data,
    //   })
    //   .then(result => {
    //     if (result.status === 200) {
    //       resolve(result.data);
    //     } else {
    //       reject(result.data);
    //     }
    //   })
    //   .catch(error => {
    //     reject(error);
    //   });
  });
};

export const patch = async (url: string, data: any) => {
  return await new Promise((resolve, reject) => {
    instance
      .patch(url, data)
      .then(result => {
        if (result.status === 200) {
          resolve(result.data);
        } else {
          reject(result.data);
        }
      })
      .catch(error => {
        reject(error);
      });
  });
};
