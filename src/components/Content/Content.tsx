import React from 'react';
import './Content.css';

function Content() {
  return (
    <div className='container'>
      <section className='content-con'>
        <div className="content-l">
          <img src="https://images.unsplash.com/photo-1648737154547-b0dfd281c51e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
        </div>
        <div className="content-r">
          <h2>Project</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro veniam ducimus ex quidem cumque veritatis, corporis incidunt beatae molestiae, debitis dolores aliquam doloremque alias dignissimos similique mollitia doloribus voluptas vitae.
          </p>
        </div>
      </section>

      <section className='content-con'>
        <div className="content-r">
          <h2>Project</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro veniam ducimus ex quidem cumque veritatis, corporis incidunt beatae molestiae, debitis dolores aliquam doloremque alias dignissimos similique mollitia doloribus voluptas vitae.
          </p>
        </div>
        <div className="content-l">
          <img src="https://images.unsplash.com/photo-1648737154547-b0dfd281c51e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
        </div>
      </section>

      <section className='content-con'>
        <div className="content-l">
          <img src="https://images.unsplash.com/photo-1648737154547-b0dfd281c51e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
        </div>
        <div className="content-r">
          <h2>Project</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro veniam ducimus ex quidem cumque veritatis, corporis incidunt beatae molestiae, debitis dolores aliquam doloremque alias dignissimos similique mollitia doloribus voluptas vitae.
          </p>
        </div>
      </section>

    </div>
  );
}

export default Content;