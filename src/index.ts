import { MikroORM } from "@mikro-orm/core";
import { Post } from "./entities/Post";
import { __prod__ } from './constants';
import microConfig from './mikro-orm.config';

const main = async () => {
    //connect to db using the config file set
    const orm = await MikroORM.init(microConfig);
    //run the migration before doing anything
    await orm.getMigrator().up();

    //RUN SQL
    //simply creates an instance of post, no persistence to DB
    const post = orm.em.create(Post, {title: 'first post'});
    //persists
    await orm.em.persistAndFlush(post);

    // const posts = await orm.em.find(Post, {});
    // console.log("posts: ", posts);

};


main().catch((err) => console.log(err));